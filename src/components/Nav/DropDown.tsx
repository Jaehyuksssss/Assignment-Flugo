import { useState } from 'react';
import { DropdownWrapper, DropdownItem, DropdownLink } from './Nav.styles';
import { INavProps } from '../../utils/interfaces';

export default function DropdownMenu({ data }: INavProps) {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownItemClick = () => {
    setDropdown(false);
  };

  return (
    <DropdownWrapper>
      <div onClick={() => setDropdown(!dropdown)}>
        {data &&
          data.map((item, index) => {
            return (
              <DropdownItem key={item.title}>
                <DropdownLink to={item.link} onClick={handleDropdownItemClick}>
                  {item.title}
                </DropdownLink>
              </DropdownItem>
            );
          })}
      </div>
    </DropdownWrapper>
  );
}
