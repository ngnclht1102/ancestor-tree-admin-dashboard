import React, { useEffect, useState } from 'react'
import Tree from 'react-d3-tree'
import { get_tree_from_root, get_tree_from_person } from '../../api/persons.api'

const fetchTree = async (person_id) => {
  try {
    const res = !person_id
      ? await get_tree_from_root()
      : await get_tree_from_person(person_id)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

const serverData2TreeDataOfOnePerson = (person) => {
  const treePerson = {
    id: person.id,
    name: person.full_name,
    attributes: person.spouse && {
      Vợ: person.spouse.full_name
    },
    children: []
  }
  if (person.children)
    Object.keys(person.children).forEach((key) => {
      treePerson.children.push(
        serverData2TreeDataOfOnePerson(person.children[key])
      )
    })
  return treePerson
}

var serverData = {}

const updateChildOfOnePerson = (depthLevel, person_id, children) => {
  if (depthLevel === 1)
    serverData.children[`child_${person_id}`].children = children
  else {
    const childrenString = JSON.stringify(children)
    const serverDataString = JSON.stringify(serverData)
    const findString = `"child_${person_id}":{`
    const replaceString = findString + '"children":' + childrenString + ','

    const newServerData = JSON.parse(
      serverDataString.replace(findString, replaceString)
    )
    serverData = newServerData
  }
}

export default function OrgChartTree() {
  const [treeData, setTreeData] = useState()
  const [selectedPerson, setSelectedPerson] = useState()

  useEffect(() => {
    const task = async () => {
      console.log('fetchTree...')
      const data = await fetchTree(selectedPerson ? selectedPerson.id : null)
      if (!selectedPerson) {
        serverData = data
        setTreeData(serverData2TreeDataOfOnePerson(serverData))
      } else {
        updateChildOfOnePerson(
          selectedPerson.__rd3t.depth,
          selectedPerson.id,
          data.children
        )

        setTreeData(serverData2TreeDataOfOnePerson(serverData))
      }
    }
    task()
    return () => {}
  }, [selectedPerson])

  return (
    <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
      {treeData ? (
        <Tree
          orientation="horizontal"
          nodeSize={{ x: 250, y: 100 }}
          translate={{ x: 100, y: 200 }}
          pathFunc="diagonal"
          enableLegacyTransitions={true}
          onNodeClick={(event) => {
            if (Object.keys(event.children).length) return
            setSelectedPerson(event)
          }}
          data={treeData}
        />
      ) : null}
    </div>
  )
}
