import { Button } from '@mui/material';
import './styles.scss';

type RequestButtonProps = {
    onClick: () => void;
    isDisabled: boolean,
}

const RequestButton: React.FC<RequestButtonProps> = ({ onClick, isDisabled }) => (
    <Button
        data-testid="open-modal-button"
        className="request-button" 
        variant="outlined" 
        disabled={isDisabled} 
        onClick={() => onClick()}
        >
            Generate images
    </Button>
);

export default RequestButton;