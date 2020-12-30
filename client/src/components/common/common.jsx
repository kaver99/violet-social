import React from 'react';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask';
import { Link, IconButton, TextField, Button, Tooltip, FormControl, InputAdornment, InputLabel, Input, Select, MenuItem } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


// ----------------------------------------------------------------
export const StyleLink = withStyles((theme) => ({
  root: {
    padding: '10px',
    '&:hover': {
      color: purple[600],
    }
  }
}))(Link);

// ----------------------------------------------------------------
export const StyleIconButton = withStyles((theme) => ({
	root: {
		padding: '10px',
		'&:hover': {
			'& .MuiSvgIcon-root': {
				color: purple[600],
			},
		},
	},
}))(IconButton);

// ----------------------------------------------------------------
export const ColorTextField = withStyles((theme) => ({
	root: {
		// width: '244px',
		'&:hover': {
			'& .MuiFormLabel-root': {
				color: purple[600],
			},
			'& .MuiInput-underline:before': {
				borderBottomColor: purple[600],
			},
		}
	}
}))(TextField);

// ----------------------------------------------------------------
export const ColorPurpleButton = withStyles((theme) => ({
  root: {
    width: '254px',
    borderRadius: '5px',
    color: theme.palette.getContrastText(purple[400]),
    backgroundColor: purple[400],
    '&:hover': {
      backgroundColor: purple[600],
    },
  },
}))(Button);

// ----------------------------------------------------------------
export const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

// ----------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  passwordInput: {
		// width: '244px',
		'&:hover': {
			'& .MuiFormLabel-root': {
				color: purple[600],
			},
			'& .MuiInput-underline:before': {
				borderBottomColor: purple[600],
			},
		}
  },
  numberformattext: {
    // width: '244px',
		'&:hover': {
			'& .MuiFormLabel-root': {
				color: purple[600],
			},
			'& .MuiInput-underline:before': {
				borderBottomColor: purple[600],
			},
		}
  },
  masktext: {
		width: '135px',
		'&:hover': {
			'& .MuiFormLabel-root': {
				color: purple[600],
			},
			'& .MuiInput-underline:before': {
				borderBottomColor: purple[600],
			},
		}
  },
  telecom: {
		width: '100px',
		'&:hover': {
			'& .MuiInput-underline:before': {
				borderBottomColor: purple[600],
			},
		}
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------
export function PasswordTextField(props) {
  const classes = useStyles();
  const { id, name, value, onChange, onClick, onMouseDown, label, showPassword, required, error } = props;

  return (
    <FormControl className={classes.passwordInput}>
      <InputLabel htmlFor={id} required={required} error={error}>{label}</InputLabel>
      <Input id={id} name={name} type={showPassword ? 'text' : 'password'} value={value} onChange={onChange} error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label={label+'-label'} onClick={(e) => onClick(e, id)} onMouseDown={onMouseDown} >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

// ----------------------------------------------------------------
function NumberFormatInput(props) {
  const { inputRef, onChange, ...other } = props;
  const classes = useStyles();

  return (
    <NumberFormat className={classes.numberformattext}
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix=""
    />
  );
}

export function NumberFormatTextField(props) {
  const classes = useStyles();
  const { id, name, label, value, handleChange, className, inputRef, ...other } = props;

  return (
    <TextField id={id} name={name} label={label} value={value} onChange={handleChange} className={classes.numberformattext}
      {...other}
      InputProps={{
        inputComponent: NumberFormatInput,
      }}
    />
  );
}

// ----------------------------------------------------------------
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export function MaskTextField(props) {
  const classes = useStyles();
  const { id, name, label, value, onChange } = props;

  return (
    <FormControl required className={classes.masktext}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} name={name} value={value} onChange={onChange} inputComponent={TextMaskCustom} />
    </FormControl>    
  );
}

// ----------------------------------------------------------------
export function TelecomSelect(props) {
  const classes = useStyles();
  const { id, name, value, onChange } = props;

  return (
    <FormControl className={classes.telecom}>
      <Select id={id} name={name} value={value} onChange={onChange} displayEmpty inputProps={{ 'aria-label': 'without label' }} className={classes.selectEmpty}>
        <MenuItem value={"Telecom"} disabled><em>Telecom</em></MenuItem>
        <MenuItem value={"SKT"}>SKT</MenuItem>
        <MenuItem value={"KT"}>KT</MenuItem>
        <MenuItem value={"LGU"}>LG U+</MenuItem>
        <MenuItem value={"OTHER"}>Other</MenuItem>
      </Select>
    </FormControl>
  );
}


// ----------------------------------------------------------------