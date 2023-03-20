import Celular from "../models/Celular";

export const renderCelular = async (req, res) => {
    const celular = await Celular.find().lean();

    res.render("index", {celular: celular});
};

export const agregarCelular = async (req, res) => {
    try {
      const { sexo } = req.body;
      req.body.sexo = sexo;
      const celular = Celular(req.body);
      const celularAlmacenado = await celular.save();
      console.log(celularAlmacenado);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }

  export const listarCelular = async (req, res) => {
    const celular = await Celular.find().lean();
    res.render("agregarCelular", { celular: celular });
  }

  export const traerCelular = async (req, res) => {
    try {
      const celular = await Celular.findById(req.params.id).lean();
      res.render("editarCelular", { celular });
    } catch (error) {
      console.log(error.message);
    }
  }

  export const updateCelular = async (req, res) => {
    const { id } = req.params;
    await Celular.findByIdAndUpdate(id, req.body);
  
    res.redirect("/");
  }

  export const deleteCelular = async (req, res) => {
    const { id } = req.params;
    await Celular.findByIdAndDelete(id);
  
    res.redirect("/");
  }

  export const statusCelular = async (req, res) => {
    const { id } = req.params;
    const celular = await Celular.findById(id);
    celular.opcion = !celular.opcion;
    await celular.save();
    res.redirect("/");
  }