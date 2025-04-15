export default function HoverTrigger({children, setIsHovered}) {
    return (
      <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    )
  }