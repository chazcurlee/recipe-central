const db = require('../db')
const {  Chef } = require('../models')


const chefs = [...Array().map((chef) => {


    return new Chef({

        name: "Gordon Ramsey",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hellomagazinecom%2Fimagenes%2Fcuisine%2F2020101599156%2Fgordon-ramsay-shares-big-news-on-instagram%2F0-474-777%2Fgordon-ramsay-at-press-event--t.jpg&f=1&nofb=1",
        recipes: [],


    },
    {

        name: "Anthony Bourdain",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpyxis.nymag.com%2Fv1%2Fimgs%2Fc14%2F91e%2F1dd5f8781cc9ac776ad178687be906abfe-08-anthony-bourdain-2.rsquarew700.jpg&f=1&nofb=1",
        recipes: [],


    },
    {
        name: "Bobby Flay",
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmakefacts.com%2Fwp-content%2Fuploads%2F2020%2F08%2FQA_Bobby_Flay_t1024.jpg&f=1&nofb=1",
        recipes: [],


    },
    {

        name: "Julia Child",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fdel.h-cdnco%2Fassets%2F17%2F26%2F3200x3999%2Fgallery-1498680290-delish-julia-child-portrait.jpg%3Fresize%3D768%3A*&f=1&nofb=1",
        recipes: [],

    }
        
    )

})]

