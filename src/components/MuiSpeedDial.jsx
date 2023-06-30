import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation Speed Dial"
      sx={{ position: "fixed", bottom: 80, right: 16 }}
      icon={<SpeedDialIcon />}
      openIcon={<EditIcon />}
    >
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="share" tooltipOpen />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="print" tooltipOpen />
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="copy"
        tooltipOpen
      />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
