const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const cardRoutes = require('./routes/card')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views') // 2-views is package

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/',homeRoutes)
app.use('/add',addRoutes)
app.use('/courses',coursesRoutes)
app.use('/card',cardRoutes)

const PORT = process.env.PORT || 3000
const password = 'admin'
const url = 'mongodb+srv://admin:<admin>@cluster0.fen0xqs.mongodb.net/?retryWrites=true&w=majority'

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})