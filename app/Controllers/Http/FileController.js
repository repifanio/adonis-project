'use strict'

const File = use('App/Models/File')
const helpers = use('Helpers')

class FileController {
  async show ({ params, response }) {
    const file = await File.findOrFail(params.id)

    return response.download(helpers.tmpPath(`uploads/${file.file}`))
  }

  async store ({ request, response }) {
    try {
      if (!request.file('file')) {

      }
      const upload = request.file('file', { size: '2mb' })

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(helpers.tmpPath('uploads'), { name: fileName })

      if (!upload.moved()) {
        throw upload.console.error()
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype
      })

      return file
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Erro ao enviar arquivo' } })
    }
  }
}

module.exports = FileController
