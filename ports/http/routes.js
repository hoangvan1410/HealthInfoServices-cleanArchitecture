module.exports = ({ HealthInfosController }) => [
  {
    method: 'GET',
    path: '/healthInfos',
    handler: HealthInfosController.listHealthInfos
  },
  {
    method: 'POST',
    path: '/healthInfos',
    handler: HealthInfosController.createHealthInfo
  },
  {
    method: 'GET',
    path: '/healthInfos/:id',
    handler: HealthInfosController.findHealthInfo
  },
  {
    method: 'DELETE',
    path: '/healthInfos/:id',
    handler: HealthInfosController.deleteHealthInfo
  },
  {
    method: 'PATCH',
    path: '/healthInfos/:id',
    handler: HealthInfosController.updateHealthInfo
  },
  {
    method: 'PUT',
    path: '/healthInfos/:id',
    handler: HealthInfosController.updateHealthInfo
  }
]
