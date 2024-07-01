import Sneaker from "../models/sneaker.models.js";

// Create

export const createSneaker = async (req, res, next) => {
  try {
    const SNEAKER = await Sneaker.create(req.body);
    res.status(201).json(SNEAKER);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Read

export const getAllSneakers = async (req, res) => {
  try {
    const allSneakers = await Sneaker.find();
    res.status(200).json(allSneakers);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getSneakerById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const SNEAKER = await Sneaker.findById(id);
    res.status(200).json(SNEAKER);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update

export const updateSneakerById = async (req, res, next) => {
  const { id } = req.params;
  const options = {
    new: true,
    runValidator: true,
  };
  try {
    const UPDATED_SNEAKER = await Sneaker.findByIdAndUpdate(
      id,
      req.body,
      options
    );
    res.status(200).json(UPDATED_SNEAKER);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteSneakerById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const DELETED_SNEAKER = await Sneaker.findByIdAndDelete(id);
    res.status(200).json(DELETED_SNEAKER);
  } catch (error) {
    res.status(400).json(error);
  }
};
