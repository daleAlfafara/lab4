
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName;
  console.log("name is " + nameToShow);
  res.render('hello', {
  	"name": nameToShow,
  	"userName" : "drja",
  	"firstName" : "Dale",
  	"lastName" : "Alfafara",
  	"officeHours" : "Tuesday", 
  	"classes" : ["Cogs120", "Cogs123", "DSGN100"]
  });
};
