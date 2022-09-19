let load = require("../clients.mock")
module.exports = function route(app){
  /** Get all clients */
  app.get("/", (req, res, next) => {
    try {  
      res.send(load.map(
        (value) => ({_id:value._id,name:value.name,image_src:value.image_src,enterprises:value.enterprises,realties:value.realties})
      ) )
      next()
    } catch (error) {
      console.log(error)
    }
  });  

  /** Get clients by name */
  app.get("/name/:name", (req, res, next) => {
    try {    
        res.send(load.find((element) => {
          if (element === req.params.name)
            load.map(
            (value) => ({_id:value._id,image_src:value.image_src,name:value.name,enterprises:value.enterprises}))
    })
            
            )
        next()
    } catch (error) {
      console.log(error)
    }
  });
     
  /** Get client totals */
  app.get("/:client_id/totals", (req, res, next) => {
    let totals = req.params.totals
    totals = load.find((element) => {
      if (element === totals)
        load.map(
        (value) => ({enterprises:value.enterprises,imóveis:value.enterprises.realties})
        )
    })

    res.send({totals})
  });  

  /** Get all enterprises */
  app.get("/enterprise", (req, res, next) => {
    let empresas = load.map(
      (value) => ({_id:value.enteprise._id,name:value.enterprise.name,image_src:value.enterprise.image_src,realties:value.enterprises.realties})
    )   
    res.send({empresas})
    next()
  });

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", (req, res, next) => {
    const body = req.body
    if(body === load.enteprise.name)
      res.send(load.map(
      (value) => ({_id:value.enteprise._id,name:value.enterprise.name,image_src:value.enterprise.image_src,realties:value.enterprises.realties,nome:value.name})
      ))  


  });

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", (req, res, next) => {
    let enterprise =  req.params.enterprise
    enterprise = load.find((element) => {
      if (element === enterprise)
        load.map(
        (value) => ({_id:value.enterprise._id,image_src:value.enterprise.image_src,name:value.enterprise.name})
        )
    })
    res.send({enterprise})
    next()
  });

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", (req, res, next) => {
    let input = req.body.enterprise.name
    let params =  req.params.name
    params = load.find((element) => {
      if (element === params)
        load.map(
        (value) => ({_id:value.enterprise._id,image_src:value.enterprise.image_src,name:value.enterprise.name,image:value.enterprise.image_src,imóveis:value.enterprise.realties})
        )
    })
    res.send({input})
  });

  /** Get general totals */
  app.get("/totals", (req, res, next) => {
    let totals = req.body 
    totals = load.map(
      (value) => ({Clients:value.enterprises.name,Empreendimentos:value.enterprises})
    )
    
    res.send({totals})
    next()  
  });
       
  /** Get a client by _id */
  app.get("/:_id", (req, res, next) => {
    const reqid = req.params.id 
    res.render("client.component.html")
    res.send(load.find((element) => {
      if (element === reqid)
        load.map(
        (value) => ({_id:value._id,image_src:value.image_src,name:value.name})
        )
    }))
    
    next()
  });
};

