import Vue from 'vue'
import {
  Carousel,
  CarouselItem,
  Message,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Button,
  Tooltip,
  Row,
  Col,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  Loading,
  MessageBox,
  Notification
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './element-variable.scss'

Vue.use(Carousel, { locale })
Vue.use(CarouselItem, { locale })
Vue.use(Dialog, { locale })
Vue.use(Dropdown, { locale })
Vue.use(DropdownMenu, { locale })
Vue.use(DropdownItem, { locale })
Vue.use(Menu, { locale })
Vue.use(Submenu, { locale })
Vue.use(MenuItem, { locale })
Vue.use(MenuItemGroup, { locale })
Vue.use(Row, { locale })
Vue.use(Col, { locale })
Vue.use(Input, { locale })
Vue.use(InputNumber, { locale })
Vue.use(Button, { locale })
Vue.use(Tooltip, { locale })
Vue.use(Form, { locale })
Vue.use(FormItem, { locale })
Vue.use(Tabs, { locale })
Vue.use(TabPane, { locale })
Vue.use(Container, { locale })
Vue.use(Header, { locale })
Vue.use(Aside, { locale })
Vue.use(Main, { locale })
Vue.use(Footer, { locale })
Vue.use(Link, { locale })
Vue.use(Divider, { locale })
Vue.use(Image, { locale })
Vue.use(Calendar, { locale })
Vue.use(Backtop, { locale })
Vue.use(PageHeader, { locale })

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
