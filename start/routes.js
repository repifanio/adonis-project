'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('session', 'SessionController.store')

Route.post('forgot-password', 'ForgotPasswordController.store')
Route.put('reset-password', 'ForgotPasswordController.update')

Route.post('/file', 'FileController.store')
Route.get('/file/:id', 'FileController.show')
