'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeAll = _this.removeAll.bind(_this);
        _this.takeAction = _this.takeAction.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.deleteOption = _this.deleteOption.bind(_this);
        _this.state = {
            options: [],
            keyOptions: 'Options'
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function (prevState) {
                return { options: [] };
            });
        }
    }, {
        key: 'deleteOption',
        value: function deleteOption(optionToDelete) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option != optionToDelete;
                    })
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var optionString = localStorage.getItem(this.state.keyOptions);
                var options = JSON.parse(optionString);
                if (options) {
                    this.setState(function (prevState) {
                        return { options: options };
                    });
                }
            } catch (e) {
                console.log("Error in reading local storage on Component Mount");
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                console.log('updated');
                console.log(JSON.stringify(this.state.options));
                localStorage.setItem(this.state.keyOptions, JSON.stringify(this.state.options));
            }
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return "Please enter non empty value!";
            }

            if (this.state.options.indexOf(option) != -1) {
                return "Value already exist!";
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'takeAction',
        value: function takeAction() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var randomValue = this.state.options[randomNum];
            alert(randomValue);
        }
    }, {
        key: 'render',
        value: function render() {
            var headerTitle = 'Indecision App';
            var headerSubtitle = 'Put your life in the heands of Computer.';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: headerTitle, subTitle: headerSubtitle }),
                React.createElement(Action, { isDisable: this.state.options.length == 0, takeAction: this.takeAction }),
                React.createElement(Options, { options: this.state.options, removeAll: this.removeAll, deleteOption: this.deleteOption }),
                React.createElement(AddOption, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.takeAction, disabled: this.props.isDisable },
                    ' What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                this.props.optionText,
                React.createElement(
                    'button',
                    { onClick: function onClick(e) {
                            console.log('First');
                            _this5.props.deleteOption(_this5.props.optionText);
                        } },
                    'Delete'
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                null,
                this.props.options.length === 0 && React.createElement(
                    'p',
                    null,
                    'No Options available.'
                ),
                React.createElement(
                    'button',
                    { type: 'button', onClick: this.props.removeAll },
                    'Remove All'
                ),
                this.props.options.map(function (e) {
                    return React.createElement(Option, {
                        key: e,
                        optionText: e,
                        deleteOption: _this7.props.deleteOption });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this8 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this8.handleOnSubmit = _this8.handleOnSubmit.bind(_this8);
        _this8.state = {
            error: undefined
        };
        return _this8;
    }

    _createClass(AddOption, [{
        key: 'handleOnSubmit',
        value: function handleOnSubmit(event) {
            event.preventDefault();
            var data = event.target.elements.option.value.trim();
            event.target.elements.option.value = "";
            var error = this.props.addOption(data);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleOnSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('container'));
