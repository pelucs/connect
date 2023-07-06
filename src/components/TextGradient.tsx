interface TextGradient{
  title: string;
}

export default ({ title }: TextGradient) => {
  return(
    <div className="relative inline-block">
      <span className="text-gradient z-10">
        {title}
      </span>

      <div className="absolute inset-0 gradient blur-2xl opacity-70 animate-pulse"/>
    </div>
  )
}