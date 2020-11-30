const { __ } = wp.i18n;
const { Fragment, useEffect, useRef } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, RangeControl } = wp.components;
const { createHigherOrderComponent, withState } = wp.compose;

export const CustomAlignInspector = createHigherOrderComponent( ( BlockEdit ) => {
	return (props) => {
		console.log(props, 'props');
		if (props.name.includes("advanced-bootstrap-blocks/row") || props.name.includes("advanced-bootstrap-blocks/column") ) {
			const breakpoints = ['xs','sm','md','lg','xl'];
			const isColumn = props.name === "advanced-bootstrap-blocks/column";
			const isRow = props.name === "advanced-bootstrap-blocks/row";
			let alignObject = alignObject || {};

			breakpoints.map( breakpoint => {

			});


			const panelContent = (props) => {
				if(props.isSelected) {

					if(isColumn) {
						return (
							<PanelRow>
								<p>column</p>
							</PanelRow>
						);
					}

					if(isRow) {
						return (
							<PanelRow>
								<p>row</p>
							</PanelRow>
						);
					}

				 }
			}


			return (
				<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
					title={ __( 'Block Align', 'advanced-bootstrap-blocks' ) }
					initialOpen={false}
					>
					{
						panelContent(props)

					/* {
					props.isSelected && Object.keys(paddingObject).map((key, index) => {
						return (
							<PanelRow key={index}>
							<PaddingControl
								property={ paddingObject[key].property }
								breakpoint={ paddingObject[key].breakpoint }
								defaultValue={ paddingObject[key].defaultValue }
								classNameList={ props.attributes.className }
								setAttributes={ props.setAttributes }
							/>
							</PanelRow>
						);
					})
					} */}
					</PanelBody>
				</InspectorControls>
				</Fragment>
			);
		}
		else {
			return <BlockEdit { ...props } />;
		}
	}
}, 'CustomAlignInspector');
