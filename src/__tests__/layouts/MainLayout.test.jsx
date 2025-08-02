export const MainLayout = ({ children }) => {
  return (
    <div className='mt-10 pt-10 px-10 lg:px-40 flex flex-col gap-4'>
      {children}
    </div>
  );
};
