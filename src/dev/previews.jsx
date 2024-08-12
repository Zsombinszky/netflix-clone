import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Signup from "../pages/Signup.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Signup">
                <Signup/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews