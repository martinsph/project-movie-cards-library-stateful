import React from 'react';
import PropType from 'prop-types';
import InputMovie from './InputMovie';

class AddMovie1 extends React.Component {
  render() {
    const {
      handlechange,
      title,
      subtitle,
      imagePath,
    } = this.props;

    return (
      <section>
        <InputMovie
          label="Título"
          inputName="title"
          inputType="text"
          inputValue={ title }
          onChangeInput={ handlechange }
          inputID="title-input"
        />
        <InputMovie
          label="Subtítulo"
          inputName="subtitle"
          inputType="text"
          inputValue={ subtitle }
          onChangeInput={ handlechange }
          inputID="subtitle-input"
        />
        <InputMovie
          label="Imagem"
          inputName="imagePath"
          inputType="text"
          inputValue={ imagePath }
          onChangeInput={ handlechange }
          inputID="image-input"
        />
      </section>
    );
  }
}

AddMovie1.propTypes = {
  title: PropType.string.isRequired,
  subtitle: PropType.string.isRequired,
  imagePath: PropType.string.isRequired,
  handlechange: PropType.func.isRequired,
};

export default AddMovie1;
