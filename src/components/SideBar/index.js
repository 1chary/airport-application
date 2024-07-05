import "./index.css"
import {Image,Text,Content} from '@adobe/react-spectrum'

const SideBar = () => (
    <div className="side-bar-container">
        <div className="tab-container">
            <Image src = "https://res.cloudinary.com/dowjvitxs/image/upload/v1720158298/Smock_Home_18_N_oetn1b.svg" className = "home-icon" />
            <Text>Home</Text>
        </div>
        <div className="tab-container">
            <Image src = "https://res.cloudinary.com/dowjvitxs/image/upload/v1720158755/Vector_7_pkfdbj.png" className = "home-icon" />
            <Text>Dashboard</Text>
        </div>
            <Content>Services</Content>
            <Text>Airports</Text>
            <Text>Videos</Text>
        <div className="other-container">
            <Content>Others</Content>
            <Text>List 1</Text>
            <Text>List 2</Text>
            <Text>List 3</Text>
        </div>
    </div>
)

export default SideBar