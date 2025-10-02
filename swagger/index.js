const {version, description, license} = require('../package.json')
const swaggerUi = require('swagger-ui-express')

// Swagger ի Կոնֆիգուրացիաները:

// Սա options օբյեկտն է, որը փոխանցվելու է swagger-jsdoc
// գրադարանին։ Սա պարունակում է Swagger-ի կոնֆիգուրացիաները։

// definition - դաշտում նկարագրվում է Swagger-ի հիմնական կազմաձևումը․ 
// այս հատվածում տեղադրվում է OpenAPI-ի տարբերակը, API-ի ինֆորմացիան և սերվերները։

// info - օբյեկտը API-ի մասին ինֆորմացիան է․
// version: (1.0.0) → քո API-ի տարբերակն է։ Կարող ես փոխել, օրինակ 2.0.0, եթե մեծ թարմացում անես։
// title: → քո Swagger-ի վերնագիրն է, որը երևալու է Swagger UI-ում։
// description: → քո API-ի նկարագրությունն է։ Կարող ես գրել ինչի համար է API-ն, ինչ ֆունկցիոնալություն ունի։

// servers մասում դու նշում ես, թե որ բազային URL-ից պետք է աշխատի API-ն։
// Այստեղ url : 'http://localhost:3000' նշանակում է, որ Swagger-ը փորձելու է քո 
// API-ի բոլոր request-ները ուղարկել դեպի http://localhost:3000։
// Կարող ես մի քանի server ավելացնել, օրինակ՝ development, staging, production։

// apis - Այս դաշտը ցույց է տալիս որտեղ փնտրի Swagger-ի համար գրված JSDoc-ները։
// ./routes/*.js նշանակում է Swagger-ը կմտնի քո routes պանակի մեջ և բոլոր .js ֆայլերը կսկաներ (parse անի)։
// Այնտեղ պետք է ունենաս Swagger-ի հատուկ կոմենտներ (@openapi կամ @swagger)։

const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            version: '1.0.0',
            title : 'First User Swagger DOCs',
            description: 'This is a simple CRUD API appliaction made with Express and Documented with Swagger',
        },
        servers : [
            {
                url : 'http://localhost:3000',
            }
        ]
    },
    apis : ['./routes/*.js']
}

// Այս Ֆունկցիան կանչվում է app.js - ում
function setupSwagger(app){
    //1.
    // app.use('/api-docs', ...)
    // Ասում է Express-ին, որ երբ user-ը գնա http://localhost:3000/api-docs հասցեով, պետք է բացվի Swagger UI-ն։
    // Այսինքն Swagger-ի UI-ն հասանելի կլինի /api-docs path-ի տակ։
    //2.
    //swaggerUi.serve
    //Սա middleware է, որը ծառայում է Swagger UI-ի static ֆայլերը (HTML, CSS, JS)։
    //Պարզ ասած՝ սա քո API-ի Swagger վիզուալ ինտերֆեյսի frontend մասն է։
    //3.
    // Սա կոնֆիգուրացիան է։ Այստեղ փոխանցում ենք մեր options օբյեկտը, որը դու արդեն վերևում սահմանել էիր։
    // Այս setup-ը Swagger UI-ին ասում է, թե որ API-ի մասին ինֆո պետք է ցույց տա։
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(options))
}

module.exports = setupSwagger