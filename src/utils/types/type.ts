export type TUserWidth = number | null;
export type TMessage = {
    name: string | undefined,
    email: string | undefined,
    password: string | undefined
};
export type TSidebarProps = {
    showSidebar: {
        sidebar: boolean;
        setSidebar: React.Dispatch<React.SetStateAction<boolean | null>>;
    }
  };