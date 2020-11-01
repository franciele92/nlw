 const Database = require ('./db');
 const saveOrphanage = require ('./saveOrphanage');

 Database.then(async db => {

   // inserir dados na tabela
      await saveOrphanage(db, {
      lat: "-30.0415789",
      lng: "-51.1762634",
      name: "Lar dos meninos",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "98989897898",
      images: [
            "https://images.unsplash.com/photo-1565535941810-e9892acd7704?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
           "https://images.unsplash.com/photo-1545013806-8e1d077550ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

       ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
     })

     await saveOrphanage(db, {
      lat: "-30.0415789",
      lng: "-51.1862634",
      name: "Lar das meninas",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "98989897898",
      images: [
            "https://images.unsplash.com/photo-1565535941810-e9892acd7704?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
           "https://images.unsplash.com/photo-1545013806-8e1d077550ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

       ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
     })

    
    // consultar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consultar somente 1 orphanato , pelo id 
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="2"')
    console.log(orphanage)

    // deletar dado da tabela 
    // console.log (await db.run("DELETE FROM orphanages WHERE id='4'"))
    // console.log (await db.run("DELETE FROM orphanages WHERE id='5'"))

 })

