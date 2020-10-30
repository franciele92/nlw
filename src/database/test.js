const Database = require ('./db');

Database.then(async (db) => {
    // inserir dados na tabela 
    await db.run(`
    INSERT INTO orphanages (
        lat, 
        lng, 
        name, 
        whatsapp, 
        images, 
        instructions, 
        opening_hours, 
        open_on_weekends
    ) VALUES (
        "-30.0415789",
        "-51.1962634",
        "Lar das meninas",
        "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        "https://images.unsplash.com/photo-1565535941810-e9892acd7704?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        "Horário de visitas Das 18h até 8h",
        "1"
    );

    `)
    // consultar dados da tabela 
    await db.all("SELECT *FROM orphanages")
})
