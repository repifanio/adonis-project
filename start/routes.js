'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('session', 'SessionController.store')

Route.post('forgot-password', 'ForgotPasswordController.store')
Route.put('reset-password', 'ForgotPasswordController.update')

Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')

  Route.resource('projects', 'ProjectController').apiOnly()
  Route.resource('projects.tasks', 'TaskController').apiOnly()
}).middleware(['auth'])
