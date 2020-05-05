
  export const setRobots = robots => ({
          type: 'SET_ROBOTS',
          robots,
  })

export const setProjects = projects => ({
		type: 'SET_PROJECTS',
		projects,

})


export const addRobot = robot => ({
		type: 'ADD_ROBOT',
		robot,
})

export const removeRobot = id => ({
		type: 'REMOVE_ROBOT',
		id,
})

export const clearRobots = robots => ({
		type: 'CLEAR_ROBOTS',
		robots
})

export const getSingleRobot = robot => ({
	type: 'GET_SINGLE_ROBOT',
	robot,
})

export const getSingleProject = project => ({
	type: 'GET_SINGLE_PROJECT',
	project,
})