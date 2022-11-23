import './styles.scss';

type AddProps = {
    isLast: boolean,
    onClick: () => void;
}

const AddButton: React.FC<AddProps> = ({ onClick, isLast }) => (
    <button
        data-testid="add-button"
        className={!isLast ? 'add-button' : 'add-button add-button--hidden'} 
        onClick={() => onClick()}
    >
        Add
    </button>
);

export default AddButton;