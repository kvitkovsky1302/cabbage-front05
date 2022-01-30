export default function Button({ children, type, onClick, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
