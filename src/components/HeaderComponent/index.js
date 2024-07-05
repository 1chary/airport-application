import "./index.css"
import {Heading,Avatar} from '@adobe/react-spectrum'

const HeaderComponent = () => (
    <div className="header-container">
        <Heading >hava havai</Heading>
        <Avatar src="https://res.cloudinary.com/dowjvitxs/image/upload/v1720153920/Avatar_-_Desktop_-_Light_rb3ppm.png" alt="avatar" className="avatar-image" />
    </div>
)

export default HeaderComponent