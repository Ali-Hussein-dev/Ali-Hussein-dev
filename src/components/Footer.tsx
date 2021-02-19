//=======================
const Footer: React.FC = () => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div
      style={{ zIndex: -1 }}
      className="sticky bottom-0 z-0 flex items-center justify-center w-full h-10 border-t bg-blueGray-50"
    >
      <span className="font-semibold text-blue-400">
        @ {new Date().getFullYear()} Ali Hussein
      </span>
    </div>
  )
}
export default Footer
