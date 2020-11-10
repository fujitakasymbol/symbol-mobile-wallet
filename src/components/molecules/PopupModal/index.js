/**
 * @format
 * @flow
 */

import React from 'react';
import type { Node } from 'react';
import { Modal, View } from 'react-native';
import styles from './popupmodal.styl';
import Card from '@src/components/atoms/Card';
import TitleBar from '@src/components/atoms/TitleBar';

type Props = {
    children: Node,
    handleClose: () => ?boolean,
    isModalOpen: boolean,
    showTopbar: boolean,
    title: string,
    showBack: boolean,
    onBack: () => ?any,
    showClose: boolean,
    onClose: () => ?any,
};

const PopupModal = (props: Props) => {
    const { children, isModalOpen, handleClose, showTopbar, title, showBack, onBack, showClose, onClose } = props;
    return (
        <Modal animationType="fade" transparent visible={isModalOpen} onRequestClose={handleClose}>
            <View style={styles.modalOverlay} />

            <View style={styles.modalWrapper}>
                <Card style={styles.bottomCard}>
                    <View style={styles.contentWrapper}>
                        {showTopbar && (
                            <TitleBar
                                style={styles.titleBar}
                                titleTextStyle={styles.titleText}
                                onClose={handleClose}
                                iconStyle={styles.backButton}
                                showBack={showBack}
                                onBack={onBack}
                                showClose={showClose}
                                onClose={onClose}
                                title={title}
                                alignLeft
                            />
                        )}
                        {children}
                    </View>
                </Card>
            </View>
        </Modal>
    );
};

export default PopupModal;