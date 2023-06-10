import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons'

const icons = {};

icons.envelope = <FontAwesomeIcon icon={faEnvelope} />;
icons.lock = <FontAwesomeIcon icon={faLock} />;
icons.user = <FontAwesomeIcon icon={faUser} />;

export default icons;