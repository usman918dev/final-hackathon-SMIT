import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../config/firebaseConfig";
import { createNewEvent } from "../../redux/slices/eventSlice";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Alert,
} from "@mui/material";
import {
  Event as EventIcon,
  Description as DescriptionIcon,
  CalendarToday as DateIcon,
  LocationOn as LocationIcon,
  Category as CategoryIcon,
  Image as ImageIcon,
  CloudUpload as UploadIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import theme from "../../theme";
import styles from "./CeateEvent.module.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const categories = [
  "Music",
  "Sports",
  "Food",
  "Art",
  "Technology",
  "Business",
  "Education",
  "Health",
  "Other",
];

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "",
  });
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const uploadImage = (imageFile) => {
    return new Promise((resolve, reject) => {
      setIsUploading(true);
      const storageRef = ref(
        storage,
        `event-images/${Date.now()}-${imageFile.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // optional progress tracker
        },
        (error) => {
          setError("Failed to upload image");
          setIsUploading(false);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setIsUploading(false);
          resolve(downloadURL);
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let imageUrl = "";

      if (image) {
        imageUrl = await uploadImage(image);
      }

      const updatedFormData = { ...formData, imageUrl };
      await dispatch(createNewEvent(updatedFormData));
      navigate("/home");
    } catch (err) {
      setError(err.message || "Failed to create event");
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" className={styles.container}>
      <Paper className={styles.paper} elevation={4}>
        <div className={styles.header}>
          <EventIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.main }}
          />
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            className={styles.title}
          >
            Create New Event
          </Typography>
        </div>

        {error && (
          <Alert severity="error" className={styles.alert}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <div className={styles.formRowFull}>
            <TextField
              fullWidth
              label="Event Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className={styles.formRowFull}>
            <FormControl fullWidth required>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <CategoryIcon color="action" />
                  </InputAdornment>
                }
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className={styles.formRowFull}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className={styles.formRowHalf}>
            <TextField
              fullWidth
              label="Date & Time"
              name="date"
              type="datetime-local"
              value={formData.date}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className={styles.formRowHalf}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className={styles.formRowFull}>
            <Typography
              variant="subtitle1"
              className={styles.imageLabel}
              style={{ color: theme.palette.text.secondary }}
            >
              <ImageIcon className={styles.imageIcon} />
              Event Image
            </Typography>

            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadIcon />}
              fullWidth
              className={styles.uploadButton}
            >
              Upload Image
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>

            {image && (
              <Typography
                variant="body2"
                color="textSecondary"
                className={styles.selectedFile}
                noWrap
              >
                Selected file: {image.name}
              </Typography>
            )}

            {imagePreview && (
              <div className={styles.imagePreviewWrapper}>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className={styles.imagePreview}
                />
              </div>
            )}
          </div>

          <div className={styles.formRowFull}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={loading || isUploading}
              startIcon={
                (loading || isUploading) && (
                  <CircularProgress size={20} color="inherit" />
                )
              }
              className={styles.submitButton}
            >
              {loading || isUploading ? "Creating Event..." : "Create Event"}
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateEvent;
