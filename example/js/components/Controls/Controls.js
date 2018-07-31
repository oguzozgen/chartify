import React, { Component } from 'react';
import * as util from '../../util/util';
import './controls.css';

export default class Controls extends Component {
	changeTheme = () => {
		const themes = {0:'default', 1:'blue', 2:'grey', 3:'white'};
		let curr = 1;

		Object.values(themes).forEach((val, i) => {
			if (this.props.config.theme == val) {
				curr = i;
			}
		});

		let next = curr < Object.keys(themes).length - 1 ? curr + 1 : 0;

		this.props.onChange({
			...this.props.config,
			line_only: false,
			theme: themes[next]
		});
	}

	toggleLine = () => {
		this.props.onChange({
			...this.props.config,
			line_only: false,
			line: !this.props.config.line
		});
	}

	toggleBordered = () => {
		this.props.onChange({
			...this.props.config,
			line_only: false,
			bordered: !this.props.config.bordered
		});
	}

	toggleBoxRadius = () => {
		let radiuses = [0, 5, 8, 10];
		let num = radiuses.indexOf(this.props.config.box_radius);
		num = num == 3 ? 0 : ++num;

		this.props.onChange({
			...this.props.config,
			line_only: false,
			box_radius: radiuses[num]
		});
	}

	toggleLineOnly = () => {
		this.props.onChange({
			...this.props.config,
			line_only: !this.props.config.line_only
		});
	}

	render() {
		return (
			<div className="control-block">
				<button type="button" onClick={this.toggleLine}>
					Toggle line
				</button>

				<button type="button" onClick={this.toggleBordered}>
					Toggle borders
				</button>

				<button type="button" onClick={this.toggleBoxRadius}>
					Toggle box radius
				</button>

				<button type="button" onClick={this.changeTheme}>
					Change theme
				</button>

				<button type="button" onClick={this.toggleLineOnly}>
					Toggle line-only
				</button>
			</div>
		);
	}
}