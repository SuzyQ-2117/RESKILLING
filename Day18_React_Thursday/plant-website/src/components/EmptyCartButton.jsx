const EmptyCartButton = ({emptyCart}) => {
    return (
        <button onClick={emptyCart}>
            🗑
        </button>
    );
}

export default EmptyCartButton;