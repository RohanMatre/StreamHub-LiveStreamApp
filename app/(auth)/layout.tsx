// { Logo } - curely braces are used to import the named export component from the file
// It serarches extract same name when we import the component from the file
import { Logo } from "./_components/logo";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
