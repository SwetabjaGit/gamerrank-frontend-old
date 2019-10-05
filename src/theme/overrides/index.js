import MuiButton from './MuiButton';
import MuiCardActions from './MuiCardActions';
import MuiCardContent from './MuiCardContent';
import MuiCardHeader from './MuiCardHeader';
import MuiChip from './MuiChip';
import MuiIconButton from './MuiIconButton';
import MuiInputBase from './MuiInputBase';
import MuiLinearProgress from './MuiLinearProgress';
import MuiListItemIcon from './MuiListItemIcon';
import MuiOutlinedInput from './MuiOutlinedInput';
import MuiPaper from './MuiPaper';
import MuiTableHead from './MuiTableHead';
import MuiTableCell from './MuiTableCell';
import MuiTableRow from './MuiTableRow';
import MuiToggleButton from './MuiToggleButton';
import MuiTypography from './MuiTypography';
import overrides from './overrides';

export default {
  MuiButton,
  MuiCardActions,
  MuiCardContent,
  MuiCardHeader,
  MuiChip,
  MuiIconButton,
  MuiInputBase,
  MuiLinearProgress,
  MuiListItemIcon,
  MuiOutlinedInput,
  MuiPaper,
  MuiTableHead,
  MuiTableCell,
  MuiTableRow,
  MuiToggleButton,
  MuiTypography,
  overrides,
  MuiPickersDay: {
    day: {
      fontWeight: '300'
    }
  },
  MuiPickersYear: {
    root: {
      height: '64px'
    }
  },
  MuiPickersCalendar: {
    transitionContainer: {
      marginTop: '6px'
    }
  },
  MuiPickersCalendarHeader: {
    iconButton: {
      backgroundColor: 'transparent',
      '& > *': {
        backgroundColor: 'transparent'
      }
    },
    switchHeader: {
      marginTop: '2px',
      marginBottom: '4px'
    }
  },
  MuiPickersClock: {
    container: {
      margin: '32px 0 4px'
    }
  },
  MuiPickersClockNumber: {
    clockNumber: {
      left: 'calc(50% - 16px)',
      width: '32px',
      height: '32px'
    }
  },
  MuiPickerDTHeader: {
    dateHeader: {
      '& h4': {
        fontSize: '2.125rem',
        fontWeight: 400
      }
    },
    timeHeader: {
      '& h3': {
        fontSize: '3rem',
        fontWeight: 400
      }
    }
  },
  MuiPickersTimePicker: {
    hourMinuteLabel: {
      '& h2': {
        fontSize: '3.75rem',
        fontWeight: 300
      }
    }
  },
  MuiPickersToolbar: {
    toolbar: {
      '& h4': {
        fontSize: '2.125rem',
        fontWeight: 400
      }
    }
  }
};
