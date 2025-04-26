export default function HoverTrigger({children, setIsHovered  = () => {}}) {
    return (
      <div
      className="size-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    )
  }