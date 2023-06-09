import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const icons = {};

icons.envelope = <FontAwesomeIcon icon={faEnvelope} />;
icons.lock = <FontAwesomeIcon icon={faLock} />;

export default icons;