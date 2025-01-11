import { useState } from 'react';
import { Logo } from './logo';
import { Button } from '@chakra-ui/react';
import { useDappContext } from '@/Context';
import { UserAccountDataModal } from '@/components/UserAccountDataModal/UserAccountData';
import { UserIcon } from 'lucide-react';
import { SignInFormOptionsModal } from '@/components/SignInFormOptionsModal/SignInFormOptionsModal';

type Props = {
  isAccountVisible: boolean;
};

export function Header({ isAccountVisible }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const { sailsIsBusy } = useDappContext();

  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Logo />
      {
        isAccountVisible ? (
          <Button
            padding={0}
            onClick={() => setAccountModalOpen(true)}
            isLoading={sailsIsBusy}
          >
            <UserIcon />
          </Button>
        ) : (
          <Button  
            // text="Sign in" 
            backgroundColor='green.400'
            onClick={() => setModalOpen(true)}
          >
            Sign in
          </Button>
        )
      }

      { modalOpen && <SignInFormOptionsModal closeForm={() => setModalOpen(false)} /> }
      { accountModalOpen && <UserAccountDataModal closeModal={() => setAccountModalOpen(false)} /> }
    </header>
  );

  
}

