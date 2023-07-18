import { Router } from './routes.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/explore", "/pages/explore.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
