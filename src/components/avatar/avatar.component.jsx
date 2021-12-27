import { AvatarContainer } from './avatar.styles';


const Avatar = ({ url, size }) => (
    <AvatarContainer size={size}>
        <img src={url} alt="avatar" />
    </AvatarContainer>
);

export default Avatar;