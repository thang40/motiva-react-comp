import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  })
);

export default function MTVButton(props: ButtonProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant='contained' {...props}>
        Default
      </Button>
    </div>
  );
}
