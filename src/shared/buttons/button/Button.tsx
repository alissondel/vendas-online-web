import { ButtonProps as ButtonPropsAntd } from 'antd';

import { ButtonAntd } from './button.styles';

interface ButtonCurrentProps extends ButtonPropsAntd {
  margin?: string;
}

const Button = ({ margin, ...props }: ButtonCurrentProps) => {
  return <ButtonAntd {...props} style={{ margin: margin }} />;
};

export default Button;
