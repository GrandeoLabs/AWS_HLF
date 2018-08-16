var owner = require('../fabric-new/controller.js')



module.exports = function(app) {
  
  app.get('/get_all_owners', function(req,res) {
    console.log('you are trying to access get all owners from routes.js')
   owner().get_all_owners(req,res)
  })
  
  app.get('/record_owner/:owner',function(req,res){
    console.log('you are recording owner from routes.js')
    owner().record_owner(req,res)
  })
}