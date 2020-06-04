
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

export const removeProject = id => ({
	type: 'REMOVE_PROJECT',
	id,
})

export const addProject = project => ({
	type: 'ADD_PROJECT',
	project,
})

export const updateRobot = robot => ({
	type: 'UPDATE_ROBOT',
	robot,
})

export const updateProject = project => ({
	type: 'UPDATE_PROJECT',
	project,
})


export const updateProjAssignment = project => ({
	type: 'UPDATE_PROJ_ASSIGN',
	project,
})

export const updateRobotAssignment = robot => ({
	type: 'UPDATE_ROBOT_ASSIGN',
	robot,
})
