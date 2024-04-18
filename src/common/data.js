import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const data = [
  { url: "user/login", msg: "Login Sucessfully"},
  { url: "user/register", msg: "Singup Sucessfully" }
]

const navigation = [
  { pathName: "Home", path: "/user", icon: HomeIcon },
  { pathName: "User", path: "/user", icon: PersonIcon }
  ]


export { data, navigation };
