import { Box, ButtonGroup, FormControl, TextField, Typography } from '@material-ui/core';
import { CloseTwoTone, DeleteOutlineOutlined, DoneTwoTone, EditTwoTone } from '@material-ui/icons';
import React, { useState } from 'react';
import useStyles from './CommentItem.styles';
function CommentItem({ userId, loggedId, avatar, name, createdAt, content, classes, onDelete }) {
  const styles = useStyles();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const openEditHandler = () => {
    setIsOpenEdit(true);
  };
  const closeEditHandler = () => {
    setIsOpenEdit(false);
  };
  const submitNewComment = (e) => {
    e.preventDefault();
    setIsOpenEdit(false);
  };
  return (
    <div className={classes?.root}>
      <Box className={styles.root}>
        <img src={avatar} alt="" className={styles.avatar} />
        <div className={styles.content}>
          <Box className={styles.top}>
            <Box display="flex" flexWrap="wrap" flex={1}>
              <Typography variant="body1" className={styles.name}>
                {name}
              </Typography>
              {loggedId && loggedId === userId && (
                <Typography variant="body1" className={styles.auth}>
                  author
                </Typography>
              )}
              <Typography variant="body1" className={styles.createdAt}>
                {createdAt}
              </Typography>
            </Box>
            {loggedId && loggedId === userId && (
              <Box className={styles.actions}>
                <EditTwoTone onClick={openEditHandler} />
                <DeleteOutlineOutlined />
              </Box>
            )}
          </Box>
          <div className={styles.bottom}>
            {!isOpenEdit && content}

            {isOpenEdit && (
              <Box className={styles.editComment}>
                <form onSubmit={submitNewComment}>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      rows={4}
                      variant="filled"
                      value={content}
                      className={styles.inputEditComment}
                    />
                  </FormControl>
                </form>
                <ButtonGroup className={styles.editCommentActions}>
                  <DoneTwoTone onClick={submitNewComment} />
                  <CloseTwoTone onClick={closeEditHandler} />
                </ButtonGroup>
              </Box>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
}

export default CommentItem;
