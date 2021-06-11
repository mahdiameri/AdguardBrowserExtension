import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Filter } from '../Filter';
import { Setting, SETTINGS_TYPES } from '../../Settings/Setting';
import { Icon } from '../../../../common/components/ui/Icon';

import '../group.pcss';

const renderFilters = (matchedFilters) => {
    return matchedFilters
        .map((filter) => <Filter key={filter.filterId} filter={filter} />);
};

const SearchGroup = ({
    groupName,
    groupId,
    filtersToShow,
    groupClickHandler,
    checkboxHandler,
    checkboxValue,
}) => {
    const groupClassName = cn('setting group', { 'group--disabled': !checkboxValue });
    const filtersClassName = cn('filters', {
        'filters--disabled': !checkboxValue,
    });
    return (
        <>
            <div className={groupClassName}>
                <button type="button" className="setting__area" onClick={groupClickHandler}>
                    <Icon
                        id={`#setting-${groupId}`}
                        classname="icon--setting setting__icon"
                    />
                    <div className="setting__info">
                        <div className="setting__title group__title">
                            {groupName}
                        </div>
                    </div>
                </button>
                <div className="setting__inline-control">
                    <Setting
                        id={groupId}
                        type={SETTINGS_TYPES.CHECKBOX}
                        label={groupName}
                        value={checkboxValue}
                        handler={checkboxHandler}
                    />
                </div>
            </div>
            <div className={filtersClassName}>
                {renderFilters(filtersToShow)}
            </div>
        </>
    );
};

SearchGroup.defaultProps = {
    filtersToShow: [],
};

SearchGroup.propTypes = {
    groupName: PropTypes.string.isRequired,
    groupId: PropTypes.number.isRequired,
    checkboxHandler: PropTypes.func.isRequired,
    checkboxValue: PropTypes.bool.isRequired,
    filtersToShow: PropTypes.arrayOf(PropTypes.object),
    groupClickHandler: PropTypes.func.isRequired,
};

export { SearchGroup };