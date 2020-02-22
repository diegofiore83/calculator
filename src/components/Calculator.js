import React, { useState } from 'react';
import { Box, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { calculator } from '../modules/calculator';
import logo from '../assets/logo.png';

const boxProps = className => ({ className, boxShadow: 2, bgcolor: 'background.paper' });
const buttonProps = className => ({ className, color: 'secondary', variant: 'contained' });

const useStyles = makeStyles(theme => ({
  calculator: {
    backgroundColor: theme.palette.primary.light,
    maxWidth: theme.spacing(32),
  },
  calculatorButton: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: theme.spacing(1),
    padding: 0,
    minHeight: theme.spacing(6),
    minWidth: theme.spacing(6),
    maxHeight: theme.spacing(6),
    maxWidth: theme.spacing(6),
  },
  calculatorScreen: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    borderRadius: 4,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(2)}px)`,
    overflow: 'hidden',
  },
  calculatorLogo: {
    width: '100%', 
    pointerEvents: 'none',
  }
}));

const Component = () => {
  const [operand1, setOperand1] = useState('0');
  const [operand2, setOperand2] = useState(null);
  const [operator, setOperator] = useState(null);

  const classes = useStyles();

  const operandClick = value => {
    if (operator) {
      if (operand2 === null) {
        setOperand2(value);
      } else {
        setOperand2(operand2 + value);
      }
    } else {
      if (operand1 === '0') {
        setOperand1(value);
      } else {
        setOperand1(operand1 + value);
      }
    }
  };

  const operatorClick = value => {
    if (operand2 === null) {
      if (value !== '=') {
        setOperator(value);
      }
    } else {
      setOperand1(calculator({ operand1: parseInt(operand1), operator, operand2: parseInt(operand2) }));
      setOperator(value === '=' ? null : value);
      setOperand2(null);
    }
  };

  const resetCalculator = () => {
    setOperand1('0');
    setOperator(null);
    setOperand2(null);
  };

  return (
    <Paper className={classes.calculator}>
      <Box id="screen" {...boxProps(classes.calculatorScreen)}>{operand2 || operand1}</Box>
      <Button id="operand7" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('7')}>7</Button>
      <Button id="operand8" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('8')}>8</Button>
      <Button id="operand9" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('9')}>9</Button>
      <Button id="operatorAddition" {...buttonProps(classes.calculatorButton)} onClick={() => operatorClick('+')}>+</Button>
      <Button id="operand4" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('4')}>4</Button>
      <Button id="operand5" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('5')}>5</Button>
      <Button id="operand6" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('6')}>6</Button>
      <Button id="operatorSubtraction" {...buttonProps(classes.calculatorButton)} onClick={() => operatorClick('-')}>-</Button>
      <Button id="operand1" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('1')}>1</Button>
      <Button id="operand2" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('2')}>2</Button>
      <Button id="operand3" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('3')}>3</Button>
      <Button id="operatorMultiplication" {...buttonProps(classes.calculatorButton)} onClick={() => operatorClick('*')}>*</Button>
      <Button id="operatorCancel" {...buttonProps(classes.calculatorButton)} onClick={() => resetCalculator()}>C</Button>
      <Button id="operand0" {...buttonProps(classes.calculatorButton)} onClick={() => operandClick('0')}>0</Button>
      <Button id="operatorEqual" {...buttonProps(classes.calculatorButton)} onClick={() => operatorClick('=')}>=</Button>
      <Button id="operatorDivision" {...buttonProps(classes.calculatorButton)} onClick={() => operatorClick('/')}>/</Button>
      <img src={logo} className={classes.calculatorLogo} alt="logo" />
    </Paper>
  );
};

Component.displayName = 'Calculator';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
